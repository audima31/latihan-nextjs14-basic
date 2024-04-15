const PaginationComponent = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log(page);

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl">
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-[#fd1b44]"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all hover:text-[#fd1b44]"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
