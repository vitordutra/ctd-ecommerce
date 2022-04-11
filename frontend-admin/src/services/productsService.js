import http from './http';

const apiUrl = '/product';

function productUrl(id) {
  return `${apiUrl}/${id}`;
}

export function getProducts() {
  return http.get(apiUrl);
}

export function getProduct(id) {
  return http.get(productUrl(id));
}

export function saveProduct(product) {
  if (product.id) {
    const body = { ...product };
    delete body.id;
    return http.put(productUrl(product.id), body);
  }
  return http.post(apiUrl, product);
}

export function deleteProduct(id) {
  return http.delete(productUrl(id));
}
