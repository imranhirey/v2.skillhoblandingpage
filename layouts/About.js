import { markdownify } from "@lib/utils/textConverter";
import { NextSeo } from "next-seo";

const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, keywords } = frontmatter;

  return (
    <section className="section">
      <NextSeo
        title={title}
        description={content}
        keywords={keywords}
      />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center mb-4">{title}</h1>
          <div className="max-w-2xl mx-auto">
            {markdownify(content, "div", "content")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
