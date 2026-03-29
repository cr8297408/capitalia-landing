import React from 'react';

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleWeight = 'semibold' | 'bold' | 'extrabold' | 'black';

export interface TitleProps {
    level?: TitleLevel;
    weight?: TitleWeight;
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
}

const levelStyles: Record<TitleLevel, string> = {
    1: 'text-4xl md:text-5xl lg:text-6xl tracking-tight',
    2: 'text-3xl md:text-4xl tracking-tight',
    3: 'text-2xl md:text-3xl tracking-tight',
    4: 'text-xl md:text-2xl tracking-tight',
    5: 'text-lg md:text-xl tracking-tight',
    6: 'text-base md:text-lg tracking-tight',
};

const weightStyles: Record<TitleWeight, string> = {
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
};

export const Title: React.FC<TitleProps> = ({
    level = 1,
    weight = 'bold',
    as,
    className = '',
    children,
    ...props
}) => {
    const Component = as || (`h${level}` as React.ElementType);

    const combinedClassName = `
    ${levelStyles[level]}
    ${weightStyles[weight]}
    text-text-primary
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <Component className={combinedClassName} {...props}>
            {children}
        </Component>
    );
};

Title.displayName = 'Title';

export default Title;
