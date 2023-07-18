import { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching product in', category);
    setProduct(['Monitor', 'House']);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
