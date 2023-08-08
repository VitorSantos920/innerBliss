import { ElementType } from 'react';
import { ServiceContainer, ServiceTitle } from './style';
import { Description } from '../../styles/Description';

interface ServiceProps {
  icon: ElementType;
  title: string;
  description: string;
}

export function Service({
  icon: ServiceIcon,
  title,
  description,
}: ServiceProps) {
  return (
    <ServiceContainer className="services__service">
      <ServiceIcon />
      <ServiceTitle className="service__title">{title}</ServiceTitle>
      <Description className="service__description">{description}</Description>
    </ServiceContainer>
  );
}
