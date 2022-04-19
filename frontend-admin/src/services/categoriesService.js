import http from './http';

const apiUrl = '/categories';

function categoryUrl(id) {
  return `${apiUrl}/${id}`;
}

export function getCategories() {
  return http.get(apiUrl);
}

export function getCategory(id) {
  return http.get(categoryUrl(id));
}

export function saveCategory(category) {
  if (category.id) {
    const body = { ...category };
    delete body.id;
    return http.put(categoryUrl(category.id), body);
  }
  return http.post(apiUrl, category);
}

export function deleteCategory(id) {
  return http.delete(categoryUrl(id));
}
