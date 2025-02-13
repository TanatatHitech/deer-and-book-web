import { type FC, useState, useEffect } from 'react';

const GAPForm: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        crop: '',
        phone: '',
        houseNo: '',
        village: '',
        subDistrict: '',
        district: '',
        province: '',
        postalCode: '',
    });
    type FormDataKey = keyof typeof formData;

    const addressFields: { label: string; name: FormDataKey }[] = [
        { label: 'บ้านเลขที่', name: 'houseNo' },
        { label: 'หมู่', name: 'village' },
        { label: 'ตำบล', name: 'subDistrict' },
        { label: 'อำเภอ', name: 'district' },
        { label: 'จังหวัด', name: 'province' },
        { label: 'เลขไปรษณีย์', name: 'postalCode' },
    ];

    const formatPhoneNumber = (value: string) => {
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return value;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;
        if (name === 'phone') {
            formattedValue = formatPhoneNumber(value);
        }
        setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
    };

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            phone: formatPhoneNumber(prev.phone),
        }));
    }, [formData.phone]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('GAPForm submitted:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Fill GAPForm</h1>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="crop">
                        Crop
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="crop"
                        type="text"
                        name="crop"
                        value={formData.crop}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={12}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <div className="grid grid-cols-12 gap-2 mt-2 text-xs">
                        {addressFields.map((field) => (
                            <div key={field.name} className="col-span-4">
                                <span className="text-gray-500">{field.label}</span>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="btn bg-crop-primary text-white" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GAPForm;
