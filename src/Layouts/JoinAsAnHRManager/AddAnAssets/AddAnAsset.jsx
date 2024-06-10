import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/AxiousSecureApi/useAxiosSecure";
import Swal from "sweetalert2";

const AddAnAsset = () => {
  // TODO: this route page will have to make it for HR manager conditionally

  // /addAssets

  const addAnAsserApi = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    addAnAsserApi
      .post("/addAssets", data)
      .then((res) => {
        Swal.fire({
          title: "Asset Added",
          text: "Your asset data store to the database successfully!!",
          icon: "success"
        });
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("productName", { required: true })}
              placeholder="product name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <input
              type="text"
              {...register("productType", { required: true })}
              placeholder="product type"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Quantity</span>
            </label>
            <input
              type="number"
              {...register("productQuantity", { required: true })}
              placeholder="product quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="text"
              placeholder="image URL"
              {...register("assetImage", { required: true })}
              className="input input-bordered"
              required
            />
          </div>
          <select 
          
          {...register("returnable", {required:true})}

          className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              is Returnable
            </option>
            <option>True</option>
            <option>false</option>
          </select>
          <div className="form-control mt-6">
            <button className="btn ">Add product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnAsset;
