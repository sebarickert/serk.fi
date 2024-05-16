import { ShowcaseTeaser } from "@/blocks/ShowcaseTeaser";
import { Heading } from "@/elements/Heading";
import { ShowcaseDto } from "@/types/ShowcaseDto";

type ShowcaseListingProps = {
  title?: string;
  showcases: ShowcaseDto[];
};

export const ShowcaseListing = ({ title, showcases }: ShowcaseListingProps) => {
  return (
    <section>
      {title && <Heading className="mb-8 lg:mb-12">{title}</Heading>}
      <ul className="grid gap-16">
        {showcases.map((showcase, index) => (
          <li key={showcase._id}>
            <ShowcaseTeaser {...showcase} reverseOrder={index % 2 !== 0} />
          </li>
        ))}
      </ul>
    </section>
  );
};
