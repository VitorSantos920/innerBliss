import { HTMLAttributes } from 'react';
import { Subtitle } from './style';

interface SectionSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export function SectionSubtitle({ title, ...props }: SectionSubtitleProps) {
  return <Subtitle {...props}>{title}</Subtitle>;
}
