
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  center?: boolean;
}

const SectionHeader = ({ title, subtitle, children, center = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-memorial-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 w-2/3">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;
