import React from 'react'

const VARIANTS = {
    // Yapmadı (Kırmızı) -> red-500
    Yapmadı: "bg-red-600 hover:bg-red-700", 
    
    // Eksik (Turuncu/Sarı) -> amber-500 (veya orange-500)
    Eksik:   "bg-amber-600 hover:bg-amber-700", 
    
    // Yaptı (Yeşil) -> emerald-500 (veya green-500)
    Yaptı:   "bg-emerald-600 hover:bg-emerald-700", 
    
    // Gelmedi (Mor) -> violet-500 (veya purple-500)
    Gelmedi: "bg-violet-600 hover:bg-violet-700", 
    
    // KitapYok (Gri) -> gray-600
    KitapYok:"bg-gray-600 hover:bg-gray-700", 

    // Varsayılan (Mavi) -> gray-600
    Default: "bg-blue-600 hover:bg-blue-700"
};
const Button = ({children, name, renk}) => {
    // 1. Gelen 'renk' prop'una karşılık gelen renk sınıfını seç.
    // Eğer geçersiz bir durum gelirse varsayılan olarak 'KitapYok' (Gri) rengini al.
  const colorClass = VARIANTS[renk] || VARIANTS.Default;
  const baseClass = "flex items-center gap-2 text-white p-2 rounded-lg transition duration-150";
  
  return (   
    <button className={`${baseClass} ${colorClass}`}>
      {children}
      {name}</button>    
  )
}

export default Button
