
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  center?: boolean;
}

const SectionHeader = ({ title, subtitle, children }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold font-vollkornsc text-burgundy-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-justify italic text-gray-600 w-full text-base md:text-lg lg:text-xl">
          {subtitle}
        </p>
      )}
      {children}
      <hr className="border-b border-burgundy-700 my-4" />
    </div>
  );
};

export default SectionHeader;
