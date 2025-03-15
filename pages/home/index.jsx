import Card from '@/components/card/Card';
import FAQs from '@/components/FAQs/FAQs';

const Home = () => {
    return (
        <div className='relative bg-gradient-to-br from-slate-900 to-blue-900 pt-24'>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-800/20 rounded-full mix-blend-screen filter blur-3xl z-0"></div>
            <h1 className="text-2xl text-center font-bold text-gray-200 my-2">Mini tools helps you to convert images to text, generate QR Code, docx to pdf and vice versa.</h1>
            <Card />
            <FAQs />
        </div>
    )
}

export default Home;