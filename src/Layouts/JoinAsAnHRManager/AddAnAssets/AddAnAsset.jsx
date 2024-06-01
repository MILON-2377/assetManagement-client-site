import { useForm } from "react-hook-form";

const AddAnAsset = () => {

    // TODO: this route page will have to make it for HR manager conditionally

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

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
              {
                ...register("productName", {required: true})
              }
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
              {
                ...register("productType", {required: true})
              }
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
              {
                ...register("productQuantity", {required: true})
              }
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
              {
                ...register("productImage", {required: true})
              }
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn ">Add product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnAsset;
