import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductProps } from '../../interfaces/Products.interface';
import { categories } from '../../constants/category';
import { useAddNewProductMutation } from '../../redux/Features/products/productApi';
import { toast } from 'react-toastify';

export default function ProductModal({ showModal, setShowModal, selectedProductData }: any) {

  const [addProducts,{error:SubmitError,isLoading,isSuccess}] = useAddNewProductMutation()
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: selectedProductData?.name,
      description: selectedProductData?.description,
      price: selectedProductData?.price || 0,
      category: selectedProductData?.category,
      brand: selectedProductData?.brand,
      stock: selectedProductData?.stock || 0,
      thumbnail: selectedProductData?.thumbnail || '',
      imgUrls: selectedProductData?.imgUrls.join(','),
      rating: 5,
    },
  });

  
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [thumbnailPreview, setThumbnailPreview] = useState('');

  const onSubmit = async ({thumbnail,imgUrls, ...rest}: Partial<ProductProps>) => {
    const formattedData:any = {
      ...rest,
      price: rest.price !== undefined ? +rest.price :0,
      stock: rest.stock !== undefined ? +rest.stock : 0, // Add default value for stock
    };
    console.log(formattedData,'rest Data');
    const formData = new FormData();

    formData.append('data',JSON.stringify(formattedData));
    if(thumbnail ) formData.append('thumbnail',thumbnail?.[0]);

    if(imgUrls ) {
      Array.from(imgUrls).forEach((file:any) => {
        formData.append('imgUrls', file);
      });
    }



    await addProducts(formData);
    if (isSuccess) {
      toast.success('Product Added Successfully');
      setShowModal(false);
    } 
    if(SubmitError){
      toast.error((SubmitError as any)?.data?.message || 'Something Went Wrong')
    }
 
  };

  const handleFileChange = (e: any, isThumbnail = false) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      if (isThumbnail) {
        setThumbnailPreview(url);
      } else {
        const files = e.target.files;
        const urls: string[] = []
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const url = URL.createObjectURL(file);
          urls.push(url); // Add the URL to the array
        }
        setPreviewImages(urls);
      }
    }
  };


  useEffect(() => {
    selectedProductData && (
      Object.keys(selectedProductData).forEach((key: any) => {
        setValue(key, selectedProductData[key]);
      })
    )
  }, [selectedProductData, setValue]);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Edit Product
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Please fill out the form below to edit the product details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input id="name" {...register("name")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="name" {...register("description")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>

                  <div className='flex gap-3'>
                    <div className="mb-4">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">price</label>
                      <input type='number' id="name" {...register("price")}  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">stock</label>
                      <input id="name" {...register("stock")} type='number' className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>

                  {/* Brand and Categorry */}

                  <div className='flex gap-3'>
                    <div className="mb-4">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">Brand</label>
                      <input id="name" {...register("brand")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="category" className="block text-sm font-medium px-10 text-gray-700">Category</label>
                      <select id="category" {...register("category")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select a Category</option>
                       
                        {
                          categories.map(category=>(
                            <option value={category.name}>{category.icon} {category.name}</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail</label>
                    <input type="file" id="thumbnail" {...register("thumbnail")} onChange={(e) => handleFileChange(e, true)} />
                    {thumbnailPreview && <img src={thumbnailPreview} alt="Thumbnail Preview" className="mt-2 w-48" />}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                    <input type="file" id="images" {...register("imgUrls")} multiple onChange={(e) => handleFileChange(e)} />
                    <div className='flex'>
                      {previewImages.map((url, index) => (
                        <img key={index} src={url} alt={`Preview ${index}`} className="mt-2 w-20" />
                      ))}
                    </div>
                  </div>
   
               {
                <p className='text-red-600 '>{(SubmitError as any)?.data.message &&  (SubmitError as any) ?  (SubmitError as any)?.data.message : ''}</p>
               }
                  <div className="flex items-center justify-between mt-6" >
                    <button type="submit" className="inline-flex  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                      {
                        isLoading ? 'Updating...' : 'Save Changes'
                      }
                    </button>
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2  text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
