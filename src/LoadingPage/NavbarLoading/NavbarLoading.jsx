const NavbarLoading = () => {
  return (
    <div className="mt-20 flex flex-col gap-5 items-center justify-center">
      <h1>Please waite data page loading...</h1>
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
};

export default NavbarLoading;
