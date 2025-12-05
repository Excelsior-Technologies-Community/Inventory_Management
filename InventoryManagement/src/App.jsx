import { useState } from 'react';
import { FaBox, FaPlus, FaList, FaHome, FaChartBar, FaCog, FaBars } from 'react-icons/fa';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'form'
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setCurrentView('form');
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setCurrentView('form');
  };

  const handleSaveProduct = () => {
    setCurrentView('list');
    setEditingProduct(null);
  };

  const handleCancelForm = () => {
    setCurrentView('list');
    setEditingProduct(null);
  };

  const navigation = [
    { name: 'Products', icon: FaBox, current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <FaBox className="text-blue-600 text-2xl mr-2" />
                <h1 className="text-xl font-bold text-gray-900">InventoryPro</h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setCurrentView('list')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      item.current
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              {currentView === 'list' && (
                <button
                  onClick={handleAddProduct}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <FaPlus className="mr-2" />
                  Add Product
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentView('list')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.current
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-2" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {currentView === 'list' ? 'Product Inventory' : (editingProduct ? 'Edit Product' : 'Add New Product')}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {currentView === 'list' ? 'Manage your product inventory efficiently' : 'Fill in the details below to save the product'}
          </p>
        </div>

        {/* Content area */}
        {currentView === 'list' ? (
          <ProductList
            onEdit={handleEditProduct}
            onDelete={() => {}}
          />
        ) : (
          <ProductForm
            product={editingProduct}
            onSave={handleSaveProduct}
            onCancel={handleCancelForm}
          />
        )}
      </main>
    </div>
  );
}

export default App;
