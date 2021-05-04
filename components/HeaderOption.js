function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex hover:border-blue-500 pb-3 items-center space-x-1 border-b-4 border-transparent cursor-pointer hover:text-blue-500 ${
        selected ? "text-blue-500 border-blue-500" : ""
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
