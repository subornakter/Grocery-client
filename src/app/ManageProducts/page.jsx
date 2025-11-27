"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthProvider"; // MUST ADD THIS



export default function ManageProducts() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);

  // Modal & Editing state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please login to access this page!");
      router.push("/login");
    }
  }, [user, loading, router]);

  // Fetch products
  useEffect(() => {
    if (user) {
      fetch(`https://grocery-project-server.vercel.app/ManageProducts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => {
          console.error(err);
          toast.error("Failed to load products!");
        });
    }
  }, [user]);

  // Delete product with SweetAlert2
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://grocery-project-server.vercel.app/ManageProducts/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            setProducts((prev) => prev.filter((p) => p._id !== id));
            Swal.fire("Deleted!", "Product deleted successfully.", "success");
          })
          .catch(() =>
            Swal.fire("Error!", "Failed to delete product!", "error")
          );
      }
    });
  };

  // Open modal for editing
  const openEditModal = (product) => {
    if (!product) return;
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Handle update product
  // const handleUpdateProduct = (e) => {
  //   e.preventDefault();
  //   if (!editingProduct) return;

  //   const updatedProduct = {
  //     name: e.target.name.value,
  //     category: e.target.category.value,
  //     price: parseFloat(e.target.price.value),
  //     unit: e.target.unit.value,
  //     rating: parseFloat(e.target.rating.value),
  //     stock: parseInt(e.target.stock.value),
  //     image: e.target.image.value,
  //     description: e.target.description.value,
  //     addedBy: user?.email || "anonymous",
  //   };

  //   fetch(`https://grocery-project-server.vercel.app/ManageProducts/${editingProduct._id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(updatedProduct),
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setProducts((prev) =>
  //         prev.map((p) =>
  //           p._id === editingProduct._id ? { ...updatedProduct, _id: p._id } : p
  //         )
  //       );
  //       toast.success("Product updated successfully!");
  //       closeModal();
  //     })
  //     .catch(() => {
  //       toast.error("Failed to update product!");
  //     });
  // };
const handleUpdateProduct = (e) => {
  e.preventDefault();
  if (!editingProduct) {
    toast.error("No product selected for editing!");
    return;
  }

  const form = e.target;
  const updatedProduct = {
    name: form.name?.value || "",
    category: form.category?.value || "",
    price: parseFloat(form.price?.value) || 0,
    unit: form.unit?.value || "",
    rating: parseFloat(form.rating?.value) || 0,
    stock: parseInt(form.stock?.value) || 0,
    image: form.image?.value || "",
    description: form.description?.value || "",
    addedBy: user?.email || "anonymous",
  };

  fetch(`https://grocery-project-server.vercel.app/ManageProducts/${editingProduct._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then((res) => res.json())
    .then(() => {
      setProducts((prev) =>
        prev.map((p) =>
          p._id === editingProduct._id ? { ...updatedProduct, _id: p._id } : p
        )
      );
      toast.success("Product updated successfully!");
      closeModal();
    })
    .catch(() => toast.error("Failed to update product!"));
};

  if (loading || !user) return <div className="mt-10 text-center">Loading...</div>;

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Manage Products</h1>
        {/* Mobile-friendly layout */}
  <div className="grid grid-cols-1 gap-6 md:hidden">
    {products.map((product) => (
      <div key={product._id} className="p-4 border rounded-lg shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-40 mb-3 rounded"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <p className="text-sm text-gray-500">Price: ${product.price}</p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => router.push(`/shop/${product._id}`)}
            className="flex-1 px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            View
          </button>
          <button
            onClick={() => openEditModal(product)}
            className="flex-1 px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(product._id)}
            className="flex-1 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
    <div className="hidden md:block md:overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Stock</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-16 h-16 rounded"
                  />
                </td>
                <td className="p-3 border-b">{product.name}</td>
                <td className="p-3 border-b">{product.category}</td>
                <td className="p-3 border-b">${product.price}</td>
                <td className="p-3 border-b">{product.stock}</td>
                <td className="flex gap-2 p-3 mt-8 border-b">
                  <button
                    onClick={() => router.push(`/shop/${product._id}`)}
                    className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => openEditModal(product)}
                    className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
     {isModalOpen && editingProduct && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
    <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center">Edit Product</h2>
      <form onSubmit={handleUpdateProduct} className="space-y-4">

        <div className="space-y-1">
          <label className="font-semibold">Product Name</label>
          <input
            name="name"
            type="text"
            defaultValue={editingProduct.name}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold">Category</label>
          <input
            name="category"
            type="text"
            defaultValue={editingProduct.category}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold">Price</label>
          <input
            name="price"
            type="number"
            step="0.01"
            defaultValue={editingProduct.price}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold">Unit</label>
          <input
            name="unit"
            type="text"
            defaultValue={editingProduct.unit}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold">Rating</label>
          <input
            name="rating"
            type="number"
            step="0.1"
            min="1"
            max="5"
            defaultValue={editingProduct.rating}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold">Stock</label>
          <input
            name="stock"
            type="number"
            defaultValue={editingProduct.stock}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold">Image URL</label>
          <input
            name="image"
            type="url"
            defaultValue={editingProduct.image}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* <div className="space-y-1">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            rows="3"
            defaultValue={editingProduct.description}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div> */}

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-[#78C841] rounded hover:bg-green-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
