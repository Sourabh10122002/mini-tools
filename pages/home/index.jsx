import Card from '@/components/card/Card';
import FAQs from '@/components/FAQs/FAQs';

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-slate-900 to-blue-900 pt-24'>
            <h1 className="text-2xl text-center font-bold text-gray-200 my-2">Mini tools helps you to convert images to text, generate QR Code, docx to pdf and vice versa.</h1>
            <Card />
            <FAQs />
        </div>
    )
}

export default Home;