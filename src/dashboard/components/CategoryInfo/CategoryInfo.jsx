const CategoryInfo = ({ categoryInfo }) => {
  return (
    <section className="flex justify-center">
      <div className="h-auto w-full max-w-5xl p-5 rounded-md bg-white border space-y-10">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <img
              src={categoryInfo?.image}
              alt=""
              className="rounded-full h-20 w-20"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-medium text-black">
              {categoryInfo?.name}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-2">
            <span className="text-sm">Name</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {categoryInfo?.name}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Description</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base font-light text-black">
              {categoryInfo?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryInfo;
