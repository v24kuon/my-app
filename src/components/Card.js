import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
      <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
        <Link to="/wallet" className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
          <img src="https://joggo.jp/_nuxt/img/BJ03-a028@2xs.6c03c79.jpg" alt="Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </Link>

        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <span className="text-gray-400 text-sm">財布</span>

          <h2 className="text-gray-800 text-xl font-bold">
            <Link to="/wallet" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
              シンプルラウンド長財布
            </Link>
          </h2>

          <p className="text-gray-500">100度まで開いて全体を見渡しやすく、カードポケット14個と収容力も抜群。</p>

          <div>
            <Link to="/wallet" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
        <Link to="/wallet" className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
          <img src="https://joggo.jp/_nuxt/img/BJ21-a092@2xs.47452fb.jpg" loading="lazy" alt="Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </Link>

        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <span className="text-gray-400 text-sm">キーケース</span>

          <h2 className="text-gray-800 text-xl font-bold">
            <Link to="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
              ラウンドキーケース
            </Link>
          </h2>

          <p className="text-gray-500">すべての鍵をコンパクトなまま持ち歩ける、ラウンドレザーキーケース。</p>

          <div>
            <Link to="/" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
