import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

// Define la forma del contenido que usas
type AccordionContentItem = {
  title: string;
  text: string;
};

// Define las props del componente
interface AccordionItemProps {
  title: string;
  text: string;
}

interface AccordionProps {
  sections: AccordionContentItem[];
}

const AccordionItem = ({ title, text }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white pb-[19px] flex flex-col rounded-md w-full max-w-[1313px] mx-auto">
      <h5
        className="flex justify-between items-center w-full max-w-[1313px] text-left font-semibold cursor-pointer gap-[24px]" // Añadido cursor-pointer para mejor UX
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <ChevronUp size={18} className="min-w-[18px]" />
        ) : (
          <ChevronDown size={18} className="min-w-[18px]" />
        )}
      </h5>
      {/* Contenedor del contenido para la animación */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-[8px]" : "max-h-0 opacity-0" // Ajusta max-h-[1000px] si esperas contenido más largo
        }`}>
        <p className="max-w-[1313px] text-[14px] font-light">
          {text.split("<br />").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < text.split("<br />").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

const AccordionFAQ = ({ sections }: AccordionProps) => {
  return (
    <div className="w-full mx-auto  flex flex-col gap-[25px] mb-[140px] mob:mb-[80px] px-5">
      {" "}
      {/* Añadido padding vertical para espaciado */}
      {sections.map((section, index) => (
        <div className="text-[18px] font-medium font-poppins" key={index}>
          <AccordionItem
            key={index}
            title={section.title}
            text={section.text}
          />
          {/* Renderiza el divisor solo si no es el último elemento */}
          {index < sections.length - 1 && (
            <div className="w-full max-w-[1313px] border-solid px-2 border-t  border-[#000000]/50 mx-auto"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionFAQ;
