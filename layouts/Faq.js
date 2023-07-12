import { markdownify } from "@lib/utils/textConverter";
import { NextSeo } from "next-seo";


function Faq({ data }) {
const { frontmatter } = data;
const { title, faqs,keywords } = frontmatter;

return (
<section className="section">
<NextSeo
        title={title}
        
        keywords={keywords}
      />
<div className="container">
<h1 className="text-center font-normal">{title}</h1>
<div className="section row">
{faqs.map((faq, index) => (
<div key={index} className="col-12 mt-6 md:col-6">
<div className="p-12 shadow">
<h4 className="faq-head">{faq.title}</h4>
<p className="faq-body mt-4">{faq.answer}</p>
</div>
</div>
))}
</div>
</div>
</section>
);
}

export default Faq;