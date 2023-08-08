import { Line } from '../Line';
import { SectionTitleContainer } from './style';

interface SectionTitleProps {
  title: string;
  className: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <SectionTitleContainer className="flex">
      <h2 className={className}>{title}</h2>
      <Line />
    </SectionTitleContainer>
  );
}
