import { ElementType } from 'react';
import { ServiceContainer } from './style';
import { Description } from '../../styles/Description';
import { ArticleTitle } from '../../styles/ArticleTitle';

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
      <ArticleTitle className="service__title">{title}</ArticleTitle>
      <Description className="service__description">{description}</Description>
    </ServiceContainer>
  );
}
