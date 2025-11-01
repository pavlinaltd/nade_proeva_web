
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  center?: boolean;
}

const SectionHeader = ({ title, subtitle, children }: SectionHeaderProps) => {
  return (
    <div className="mb-8 text-center lg:mx-20">
      <h2 className="text-2xl lg:text-3xl font-bold font-vollkornsc text-burgundy-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-center text-gray-600 mx-auto w-full text-base md:text-lg lg:text-xl">
          {subtitle}
        </p>
      )}
      {children}
      <hr className="border-b border-burgundy-700 my-4" />
    </div>
  );
};

export default SectionHeader;
