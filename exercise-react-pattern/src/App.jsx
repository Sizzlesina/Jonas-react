/** @format */

import { faker } from "@faker-js/faker";
import List from "./List";
import ProductItem from "./ProductItem";
import CompanyItem from "./CompanyItem";
import withToggles from "./HOC";
import ProductList from "./ProductList";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      {/* <div className='col-2'>
        <List
          title='Products'
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        <List
          title='companies'
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div> */}
      <div className='col-2'>
        <ProductList title='Products HOC' items={products} />
        <ProductListWithToggles title='Products HOC' items={products} />
      </div>
    </div>
  );
}
