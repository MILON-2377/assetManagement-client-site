import Swal from "sweetalert2";
import useAuthProvider from "../../../../Hooks/AuthProviderHooks/useAuthProvider";
import useAxiosSecure from "../../../../Hooks/AxiousSecureApi/useAxiosSecure";
import reqIdUpdate from "../../../../Hooks/HandleUpdateState/update";

const AssetsDisplayCompo = ({ assetsData }) => {
  //   console.log(assetsData);
  const { user } = useAuthProvider();
  const axiosSecureApi = useAxiosSecure();

  const {
    assetImage,
    productName,
    productQuantity,
    productType,
    returnable,
    _id,
  } = assetsData;

  const handleModalShow = (_id) => {
    reqIdUpdate(_id);
    document.getElementById("my_modal_3").showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const assetName = productName;

    const assetType = returnable ? "returnable" : "non-returnable";
    const requestEmail = user?.email;
    const requestName = user?.displayName;   
    const requestDate = today.toLocaleDateString("china");
    const _id = reqIdUpdate();
    // console.log(_id);

    const noteData = e.target.note.value;
    const requestStatus = "pending";
    const requestInfo = {
      assetName,
      assetType,
      requestDate,
      requestEmail,
      requestName,
      requestStatus,
      noteData,
      ..._id,
    };

    axiosSecureApi
      .post("/requestAssets", requestInfo)
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! ${res.data.message}  `,
          });
        } else {
          Swal.fire({
            title: "Data store!",
            text: "Your data store successfully to database!",
            icon: "success",
          });
        }
        document.getElementById("my_modal_3").close();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" h-[400px] px-4 py-4 flex flex-col justify-between ">
      <div className="w-full h-[220px] ">
        <img src={assetImage} className="w-full h-full object-cover " />
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">
            {productQuantity ? "Available" : "Not-available"}
          </div>
        </h2>
        <div className="card-actions flex items-center justify-between ">
          <div className=" bg-base-100 px-3 py-2">
            {returnable ? "Returnable" : "Non-returnable"}
          </div>
        </div>
      </div>
      <div>
        {productQuantity > 0 ? (
          <>
            <button
              onClick={() => handleModalShow(_id)}
              disabled={productQuantity > 0 ? false : true}
              className={
                productQuantity > 0
                  ? "bg-black  hover:bg-black hover:bg-opacity-70 text-white px-4 py-3 w-full "
                  : "disabled"
              }
            >
              Request for Asset
            </button>
          </>
        ) : (
          <>
            <button
              disabled={productQuantity > 0 ? false : true}
              className="bg-black  hover:bg-black hover:bg-opacity-70 text-white px-4 py-3 w-full "
            >
              Request for Asset
            </button>
          </>
        )}
      </div>

      {/* modal section */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="form-control">
              <h1 className="font-Poppins text-xl mb-2 font-bold">Note's</h1>
              <textarea
                className="textarea w-full textarea-bordered"
                name="note"
                placeholder="note"
              ></textarea>
            </div>
            <button className="w-full transition-colors duration-500 bg-black text-white active:bg-black active:bg-opacity-85 hover:bg-black hover:bg-opacity-70 px-3 py-2 ">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AssetsDisplayCompo;
