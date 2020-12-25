import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

const HomePage = (props) => {
    return props.products.map((product) => {
        return (
            <div>
                <Link href={product.slug}>
                    <a>
                        <h1>{product.name}</h1>
                    </a>
                </Link>
                <div>
                    <p>{product.description}</p>
                    <p>${product.price / 100}</p>
                </div>
            </div>
        );
    });
};

export const getStaticProps = async () => {
    const directory = `${process.cwd()}/content`;
    const filenames = fs.readdirSync(directory);

    const products = filenames.map(filename => {
        // read file from fs
        const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
        // pull out formatter => name
        const { data } = matter(fileContent);
        // return name, slug
        const slug = `/products/${filename.replace(".md", "")}`;
        const product = {
            ...data,
            slug,
        };
        return product;
    });
    return {
        props: {
            products,
        },
    };
};

export default HomePage;