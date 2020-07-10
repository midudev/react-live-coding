import React from "react";
import {CategoryLink, CategoryListItem, CategoryList, CategoryTitle} from './styles'

export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index}>
            <CategoryLink href={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}
