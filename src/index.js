import { createRoot } from "react-dom/client";
import { product } from "./mock";

import ProductPage from "./product-page/product-page";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<ProductPage product={product} />);
