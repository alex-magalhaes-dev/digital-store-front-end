function ButtonIcon({ src, alt, className }) {
   return (
      <img 
      className={className} 
      src={src} 
      alt={alt} 
      width={24}
      height={24}
      />
   );
}

export default ButtonIcon;
