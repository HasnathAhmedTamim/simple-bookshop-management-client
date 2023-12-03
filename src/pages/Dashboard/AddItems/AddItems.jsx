import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaShoppingCart } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // img to imgbb
    const imageFile = { image: data.imageURL[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send
      const bookItem = {
        bookTitle: data.bookTitle,
        category: data.category,
        price: parseFloat(data.price),
        bookDescription: data.bookDescription,
        imageURL: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/book", bookItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.bookTitle} is add to book`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("with image url", res.data);
  };
  return (
    <div className="">
      <SectionTitle
        heading="Add an items"
        subHeading="Explore More"
      ></SectionTitle>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Book Name*</span>
              </div>
              <input
                type="text"
                placeholder="Book Name"
                {...register("bookTitle", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex gap-6">
            {/* c */}
            <div className="my-6">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category Name*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-secondary w-full "
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="Mystery">Mystery</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="History">History</option>
                  <option value="Offered">Offered</option>
                </select>
              </label>
            </div>
            {/* p */}
            <div className="my-6">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Book Price*</span>
                </div>
                <input
                  type="text"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* dts */}
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Book Details</span>
            </div>
            <textarea
              {...register("bookDescription")}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
              {...register("imageURL")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn btn-primary">
            Add Item To Cart <FaShoppingCart></FaShoppingCart>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
