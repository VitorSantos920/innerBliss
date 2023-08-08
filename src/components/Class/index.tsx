import { ArticleTitle } from '../../styles/ArticleTitle';
import { Description } from '../../styles/Description';
import { ClassContainer } from './style';

interface ClassProps {
  imgName: string;
  imgAlt: string;
  title: string;
  description: string;
}

export function Class({ imgName, imgAlt, title, description }: ClassProps) {
  return (
    <ClassContainer className="class flex">
      <img
        src={`/classes/${imgName}.png`}
        className="class__img"
        alt={imgAlt}
      />

      <div className="class__content">
        <ArticleTitle className="class__title">{title} Yoga</ArticleTitle>
        <Description className="class__description">{description}</Description>
      </div>
    </ClassContainer>
  );
}
