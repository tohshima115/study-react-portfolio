import './About.css';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import { useTypingEffect } from '../../hooks/typing-effect';
import useDelayed from '../../hooks/delayed-class';

function About() {
  const info_1 = useTypingEffect(
    "【名前】豊島 豊\n【性別】男\n【学歴】東京理科大学 23卒\n【実務経験】１年未満\n【使用経験】Illustrator、Figma、Blender、Clip Studio Paint\n【コーディング経験】HTML/CSS、React（JavaScript）", 50, 4000)
  const info_2 = useTypingEffect("■個人履歴■\n大学卒業後、中小企業に入社。しかし、友人との共同プロジェクトに集中するため３ヶ月で退職。現在は製品の開発に従事。フロントエンドデザインの全般を担当し、プロジェクトを推進中。\n大学在学中、ライン、シェイプ、バリューといった構図の基本知識に触れる。これまで直感的だと思っていたグラフィックデザインが実は論理的な側面を持つことを知り、その魅力に引き込まれ学習を深めるようになる。グラフィックの分析スキルを磨き、理論的に説明可能な作品作りを心がける。グラフィックデザインに関連する職業を目指し、専門スキルのさらなる向上に努める。", 50, 13000)
  const delayed = useDelayed(11500)
  return (
    <div className='about'>
      <Nav/>
      <div className='container'>
        <Header title={"Yutaka Toyoshima"} />
        <main>
          <div className='basic-info'>
            <img className='face' src="/face.jpg" alt="" />
            <div className={`text-info ${delayed ? "":"typewriter"}`}>{info_1}</div>
          </div>
          <div className='adition-info'>
            <div className={`text-info ${delayed ? "typewriter":""}`}>
              {info_2}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default About;