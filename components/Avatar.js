function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Profile picture"
      className={`w-10 h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}
    />
  );
}
export default Avatar;
