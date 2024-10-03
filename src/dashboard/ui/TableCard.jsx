const TableCard = ({ children, title }) => {
  return (
    <div
      className={twMerge(
        "border border-b border-gray-200 rounded-md p-5 sm:w-3/4 grid mx-auto bg-white",
        className
      )}
    >
      <span
        className={twMerge(
          "text-3xl font-medium tracking-normal text-center leading-normal text-secondary my-5",
          className
        )}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

export default TableCard;
