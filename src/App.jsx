import React, { useState } from 'react'
import { motion, useScroll } from 'motion/react'
function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>

      <motion.div animate={{scale:0 , height:0}} transition={{delay:6 ,duration:1}}>
        <motion.div
          initial={{
            y: -10,
            scale: 0
          }}
          animate={{
            y: [-750, 400, 0],
            scale: 1,
            // backgroundImage:"URL('https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777212689/IMG_3496_yhn26j.jpg')",

          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "anticipate"
          }}
          className="text-3xl font-bold  w-[100%]  h-[100vh] bg-cover text-white  bg-purple-600 flex justify-center items-center">


          {/* <motion.div initial={{y:-400}} animate={{y:-100 , scale:3 , }} transition={{delay:4 }} className=' flex'>
          <motion.h1>
            Ma
          </motion.h1>
          <motion.h1>
            hi
          </motion.h1>
        </motion.div> */}
          <motion.div animate={{ x: 1500 }} transition={{ delay: 5 }} className=' fixed z-20'>
            <motion.h1 className=' flex' animate={{ scale: 10 }} transition={{ delay: 2 }}>
              <motion.h1 initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ delay: 2, duration: 1 }}>
                W
              </motion.h1>
              <motion.h1 initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 2 }}>
              E
              </motion.h1>
              <motion.h1 initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 2 }}>
                L
              </motion.h1>
              <motion.h1 initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 2, duration: 2 }}>
                C
              </motion.h1>
              <motion.h1 initial={{ x: 500 }} animate={{ x: 0, rotate: -360 }} transition={{ delay: 1, duration: 1 }}>
                O
              </motion.h1>
               <motion.h1 initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ delay: 2, duration: 1 }}>
              M
              </motion.h1>
              <motion.h1 initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 2 }}>
                E
              </motion.h1>
            
            </motion.h1>
          </motion.div>
          {/* <motion.hr className=' h-3 w-96' initial={{y:150}}>

        </motion.hr> */}
        </motion.div>
      </motion.div>

      {/* <motion.div style={{ scaleX: scrollYProgress }} className='h-5 bg-red-400   origin-left z-50'></motion.div> */}
      <motion.p initial={{ scale: 0 , height:0 }} animate={{ scale: 1 }} transition={{ delay: 6, duration: 2 }} className='px-10' >sunt accusantium itaque libero iste voluptates, molestias quos odio aperiam ullam fuga soluta? Perferendis voluptate rerum dolorem, praesentium enim totam temporibus fugiat!
        Quas, doloremque labore. Dolores laborum perspiciatis asperiores, nesciunt illo harum voluptas cum voluptate veritatis rem similique libero suscipit, commodi dolor! Consectetur voluptas sapiente quam tempore similique laborum, est reprehenderit libero!
        Architecto fugit soluta quia provident obcaecati mollitia quas quidem deserunt libero nam ab iusto facilis corporis quaerat rem ex quod blanditiis quis, aliquam qui! Modi accusamus debitis animi facilis eaque.
        Cupiditate cumque voluptate animi nisi dicta rem eaque deserunt provident architecto aspernatur eligendi, dolorem tempore expedita, nesciunt quam sapiente voluptatem, error debitis deleniti aut molestias alias. Necessitatibus aliquam omnis ipsa.
        Dicta deleniti dolorum est, laborum ipsum quisquam excepturi eligendi optio error tenetur provident aut cum voluptatum dolores vero, ipsam cupiditate, nulla maiores earum quo perferendis explicabo facere! Voluptatibus, soluta. Iure.
        Officia aspernatur eveniet libero. Inventore libero quod blanditiis? Neque iure tempora dolor error deserunt fugit earum possimus voluptatem corrupti quae! Asperiores facere molestias unde voluptas cupiditate illo tempore, labore quo.
        Laboriosam nemo commodi harum. Iste expedita velit, nemo sequi itaque saepe quas, ut laudantium recusandae, tempora necessitatibus quis vitae architecto ab deserunt alias ipsam dolor. Esse temporibus asperiores porro consequatur.
        Illo obcaecati cumque veritatis facilis repellat pariatur excepturi officia eveniet quibusdam, quos eius necessitatibus nostrum impedit vero! Animi quasi dolores necessitatibus, consectetur dicta aliquam quae autem quo possimus, molestiae nam!
        Maiores corporis placeat nihil officiis quos, sed facere! Adipisci molestias modi alias sed, recusandae facilis illo quisquam vitae doloribus ut dolorem, quaerat laborum, doloremque pariatur totam tempore provident quasi labore?
        Eum expedita repudiandae corporis voluptatem quod, laboriosam accusamus eveniet mollitia hic cum fuga, minima magni totam possimus repellat eaque incidunt reprehenderit. Iusto magnam libero est necessitatibus maiores voluptates nostrum ex.
        Vitae, aperiam? Beatae expedita odio vitae fuga incidunt, explicabo odit debitis alias nulla quae harum tempore molestias sed repudiandae? Labore corporis obcaecati ipsam deserunt doloremque illo, iure distinctio esse illum.
        Modi excepturi voluptas quae, vero est rem sunt ipsum fugiat mollitia cumque vel aliquid corrupti, animi error, dolores officiis asperiores at voluptate. Vitae facilis mollitia, numquam nam vero assumenda libero.
        Molestiae, est expedita voluptatibus itaque veritatis dolorum delectus culpa adipisci vel, recusandae nobis et hic? Nobis, quae harum. Saepe eum exercitationem odio! Ea, porro. Blanditiis autem asperiores dolores deserunt veniam?
        Pariatur repellendus repellat adipisci animi quos commodi, cumque tempore atque aliquid, ipsa vel qui quod sapiente odio error possimus molestias est suscipit. Quae eius minima, necessitatibus est a nobis dolorem.
        Similique sed vitae id nesciunt, autem ab veniam pariatur, voluptatem, facere tempora illo eos ipsam! Doloremque, nam libero! Rerum in ipsa aspernatur culpa quibusdam vitae enim! Ducimus quo magni explicabo?
        Explicabo cum dolorem tenetur eum laborum, sed illo atque fugit architecto quia amet quam officiis autem hic possimus vero facilis quas ea minima quo natus incidunt! Voluptate dolorem qui nostrum?
        Ex, deleniti debitis! Vitae saepe dignissimos nisi numquam, reprehenderit natus sit harum distinctio officiis quasi ullam ex aspernatur, eos magni aliquid ea voluptatem quod asperiores. Reprehenderit quasi veritatis voluptatem aut.
        Eligendi nemo obcaecati officiis voluptate deleniti laboriosam iure cumque, unde ipsam quod dolores earum architecto suscipit blanditiis quas quisquam nobis rem hic nam! Aliquam facilis eligendi ipsa, ex eius blanditiis.
        Tenetur accusantium impedit, magnam voluptatem reiciendis, et nemo mollitia vel nobis libero modi cum ipsam qui voluptates fugiat excepturi voluptatibus nam. Aperiam ducimus molestias obcaecati dolorem similique delectus itaque numquam.
        Cupiditate ipsum, recusandae saepe ab rerum accusantium earum at nihil quibusdam quas deserunt tempora repellendus velit neque numquam explicabo, itaque quidem voluptate tenetur labore quia. Laborum a qui nam commodi.
        At sed mollitia veritatis iure natus dolores voluptatum eligendi officia consectetur, laborum fuga temporibus. Saepe accusantium nam, reiciendis deserunt praesentium optio quibusdam rerum repellat quasi aperiam incidunt veniam dignissimos vitae!
        Minus ut repellat fugit eligendi harum. Corrupti, praesentium. Officiis exercitationem quo corrupti quae, tempora illum facilis nemo maiores ratione enim nesciunt quia id alias odit aliquam debitis incidunt in ut.
        Maxime provident ducimus fugit illum possimus, eaque sed sint quaerat voluptatibus, porro pariatur eligendi nam quae ipsum! Repudiandae officiis nulla error maxime, est hic exercitationem non doloribus nostrum aspernatur ipsa.
        Enim, temporibus. Eveniet tempora dicta cum tempore. Eaque beatae nisi libero quo voluptatem cumque! Consequuntur, vel ipsam! Distinctio neque incidunt libero aliquam ipsum eaque ab blanditiis corporis natus. Recusandae, voluptas?
        Error, architecto accusamus. Numquam vero animi magni reprehenderit consequatur, facilis reiciendis beatae ad possimus, doloremque consequuntur sapiente optio, nam mollitia deserunt totam blanditiis enim hic magnam consectetur eos dicta commodi.
        Distinctio veniam, voluptatem amet nesciunt fugit saepe ipsam aut laboriosam dolorum nostrum recusandae alias. Atque quos quisquam, unde tempore illo repellat iusto! Natus voluptas provident officiis error, possimus harum quisquam.
        Adipisci quisquam obcaecati sit molestiae, veniam ipsam magni perspiciatis, sapiente doloremque ad, placeat quia animi nobis vitae? Velit sed officiis distinctio similique recusandae consectetur porro, consequatur doloremque saepe ipsam aliquid.
        Aperiam doloremque sapiente officia eveniet distinctio quaerat facilis atque unde, necessitatibus sint expedita maiores at, nemo in blanditiis dolores eos laboriosam fugiat esse tempore impedit minus pariatur. Maiores, animi reiciendis?
        Quam ipsa eligendi hic natus dolore odit veniam reiciendis ullam, placeat, nesciunt ipsum quaerat deserunt vitae autem! Iste error, molestias enim libero maiores sunt eum! Ipsum a neque ex facilis?
        Odio officia ullam incidunt facere natus excepturi quas totam molestiae vel ex et, sapiente repudiandae quibusdam delectus architecto. Reprehenderit sequi consequatur inventore alias officia tempora magnam atque officiis magni nulla.
        Cumque voluptates maxime ex itaque est quidem vero inventore, dolorum corporis ratione nihil veritatis! Ut, hic? Illo, ut voluptatem qui eaque at odit alias modi eius fugiat consequuntur rem quaerat?
        Et odit, quibusdam debitis autem expedita est dolore doloribus tempore illo earum eius, aspernatur natus laboriosam hic nesciunt dolores ipsam eum, neque ipsum quidem obcaecati necessitatibus quo impedit. Deserunt, quod!
        Ad, repellat minima temporibus incidunt nobis consequuntur! Consequatur perspiciatis sunt voluptas eveniet nulla blanditiis, numquam maxime accusantium voluptates iure praesentium quisquam ea in eaque similique ipsum rem quasi veniam eos.
        Adipisci eos veniam, nisi ducimus possimus soluta corporis, minus quasi quidem excepturi impedit nesciunt dolor rem ipsa incidunt accusantium! Atque facere sint inventore at fugit quae error itaque voluptatum aut.
        Aliquid est quaerat debitis. Doloremque quos dolorem voluptatem vel? Odit tenetur aliquid quisquam soluta at rerum dolor adipisci nihil architecto fuga! Provident laudantium doloremque iure consectetur excepturi aut distinctio unde.
        Quos voluptas ipsa voluptatum qui provident sapiente animi officiis, nam obcaecati consequatur laudantium rerum excepturi doloremque laboriosam illum dolores mollitia eum nulla totam facilis vitae facere! Ipsum dolorum natus nesciunt.
        Maxime nobis distinctio at dolores ipsum reprehenderit corrupti earum ipsa laboriosam hic repellat laudantium, sapiente voluptatibus praesentium? Fuga rerum hic atque id quasi. Nesciunt accusantium laboriosam aliquam numquam delectus temporibus?
        Velit temporibus, repudiandae explicabo deleniti tempora sapiente exercitationem voluptates quas consequuntur reprehenderit molestiae saepe asperiores voluptatem rem totam quae? Nulla, eum ipsam vel provident optio ipsa a placeat itaque! Natus!
        Nam pariatur odio sapiente magni earum, asperiores, quod, debitis minima cum harum ea deserunt? Quibusdam cupiditate, blanditiis voluptatem facilis animi sunt neque maxime, non harum corporis, fuga doloremque dolores suscipit!
        Earum, harum. Voluptas eum voluptates alias porro deleniti unde. Architecto velit ea tenetur officiis a dolores sit explicabo illum blanditiis eaque inventore fuga voluptatem dolor iure minus perferendis, quos consequatur?
        Aut, amet deserunt? Aperiam, tempora porro quos sint aspernatur molestiae omnis vitae quod, minus excepturi amet vel quisquam velit sed cupiditate corrupti provident laudantium temporibus! Aut nisi inventore quo quidem.
        Modi assumenda quibusdam debitis alias dolor libero, animi voluptatem illo a dolore vero nisi quo dolorem at perspiciatis amet minima reprehenderit delectus unde esse quam aliquam? Suscipit eveniet reprehenderit placeat?
        Temporibus illo consequatur sit, laudantium minima eos asperiores perferendis voluptas rerum eveniet. Quam, dolores nemo unde exercitationem modi libero magnam. Ab ipsa distinctio accusantium voluptatibus nemo sequi ratione voluptates consequuntur.
        Ipsum, eos debitis, quasi architecto iure eius perferendis at consectetur nobis dolor iste aspernatur quo. Saepe quasi, adipisci corporis, consequuntur nostrum magni necessitatibus ex vero dolor error praesentium optio porro?
        Doloribus, aut, veritatis ex placeat ut ipsam consequuntur magnam commodi ipsa molestias eligendi amet consectetur debitis mollitia dolorum eaque vitae soluta voluptate ratione molestiae quos fugiat rerum! Ut, incidunt quia.
        Voluptatem illum cumque natus, corporis minima obcaecati, quasi explicabo dolorum molestias nulla, unde non ducimus autem doloremque libero animi dolorem nisi dolore? Ipsa quas quae facilis totam nemo earum accusamus.
        Ipsa labore placeat consequatur qui, nam ex blanditiis quae id tenetur vel doloribus aperiam, praesentium error ad maiores excepturi et veniam sit? Autem, ipsum libero quidem fugiat ea quasi eaque?
        Enim odio laboriosam vel quia et hic porro necessitatibus voluptate consectetur alias. Libero earum vel quaerat natus ipsum consequatur, sunt in architecto dicta ut voluptas repudiandae, asperiores nesciunt ad et.
        Labore est maxime distinctio suscipit nostrum cum. Impedit debitis adipisci facilis obcaecati, voluptate possimus nobis eius magnam voluptatum iure ducimus ab animi quidem deserunt. Asperiores reiciendis tenetur non laudantium aut.
        Similique quam molestias sed neque non consectetur magnam sunt molestiae, hic itaque pariatur veniam nemo nam laboriosam consequuntur ea adipisci laborum excepturi libero aliquam. Ex similique nobis amet nihil molestiae.
        Neque exercitationem vero iusto necessitatibus sequi iste voluptatum explicabo molestias! Quo, excepturi dolores! Veniam, sint sit magnam impedit minus ipsum repellendus iure possimus reiciendis adipisci ipsam facere, dolorem sapiente pariatur.
        Voluptatem dolore deserunt totam repellat praesentium consequatur veniam quasi quo corporis accusantium quia, cupiditate blanditiis eius dolor pariatur quod libero reiciendis necessitatibus tenetur doloribus voluptates. Distinctio nostrum non atque totam.
        Quod ab culpa magni saepe explicabo! Tempore labore eos laborum iure sequi laudantium natus voluptatum, quo atque. Error reprehenderit, odit adipisci praesentium amet esse, quis excepturi ea nulla repudiandae incidunt.
        Facilis blanditiis qui cupiditate odio quae ipsum, eveniet dolore. Aliquam facere saepe a soluta eius odit. Nemo vero incidunt aspernatur nam amet mollitia minima. Cumque officia iste accusamus esse deserunt?
        Qui blanditiis, consequatur voluptatibus sed vitae consequuntur et sunt aspernatur rem recusandae earum quo, eos fuga similique labore velit voluptatum magnam quisquam voluptas numquam. Facere quos tempore fuga cumque maiores.
        Doloremque iusto voluptatum cumque dolor at fugiat modi mollitia illo accusantium labore atque, in doloribus harum impedit nostrum. Corrupti quaerat optio excepturi saepe asperiores voluptatem ipsam deserunt! Ipsa, nulla doloribus.
        Magni cumque fugiat repellat! Id, consequuntur a itaque commodi consequatur praesentium cupiditate magni, rem aliquid incidunt dignissimos eum dolores earum, illo voluptatum eligendi sit mollitia aperiam nemo accusantium velit libero!
        Sunt fugit vero libero enim facere ex. Corporis, eveniet. Quae iste ullam, officiis laudantium ut accusamus dolores iusto provident vitae dicta voluptates cumque, beatae natus et! Perspiciatis quas veritatis provident.
        Impedit aliquam saepe praesentium, inventore dolorum, illo unde quo odit et reprehenderit, laudantium dicta tempore neque animi doloribus aspernatur ipsum nesciunt. Earum unde ut soluta eligendi qui quaerat, sapiente odit.
        Ut eos est repellendus sapiente porro sed iure, sit omnis, quae architecto facilis expedita veritatis at qui veniam illum ad excepturi odit distinctio vitae enim! Soluta praesentium voluptate non saepe.
        Excepturi saepe temporibus vel natus libero assumenda adipisci nisi commodi autem, fugit minus nulla ullam itaque consequuntur odio quisquam quam in quas sequi dicta repellendus molestiae veniam! Eveniet, ipsum excepturi?
        Officia explicabo, incidunt at pariatur fugit eum nam facere ipsa maiores, dolore, ullam amet quis. Consectetur qui rerum expedita ullam velit harum minima labore. Temporibus iure a vel vero provident?
        Ex, numquam! Saepe officia temporibus iusto molestias, accusantium qui in optio pariatur ea, commodi officiis consectetur impedit, nisi quis iure corporis aut? Dicta reprehenderit tempore, corporis ratione laudantium consequatur voluptate?
        Natus sequi autem dicta id explicabo suscipit corporis ipsa aliquam voluptatibus dolorem voluptate, nemo facilis at esse quisquam porro quaerat earum magni. Voluptatem suscipit voluptate ab ut quasi ad vero.
        Veniam minus molestias iusto voluptate aperiam deleniti vel repudiandae unde accusantium reiciendis autem rem, eos quis odit aut impedit recusandae reprehenderit aliquid ipsum magnam maiores earum? Impedit saepe fugiat dignissimos.
        Necessitatibus nisi optio adipisci! Exercitationem cumque voluptatibus nisi culpa, sit modi cupiditate excepturi, expedita vitae, perferendis possimus hic! Sapiente assumenda odit praesentium non laudantium laborum quisquam ut earum ratione rem?
        Ad voluptatem provident, accusantium sunt libero animi in distinctio quod illum! Veniam perspiciatis, omnis, non quae corporis cum fugit, doloribus ea amet quia nisi repellat. Assumenda, repudiandae earum! Architecto, animi.
        Magni eveniet id maxime necessitatibus, magnam quo saepe reiciendis ad facilis deleniti veritatis consequuntur cumque aperiam esse eius corrupti omnis, accusantium totam nisi delectus. Iste non est porro tempore suscipit!
        Inventore similique vero, eos fugit at voluptates aspernatur perferendis accusantium ea, facere quaerat! Asperiores at est culpa enim id a autem cupiditate consequuntur vero unde, temporibus mollitia ex repellat laborum!
        In perferendis eligendi quasi incidunt sapiente harum tempora rerum commodi? Sint distinctio provident recusandae laudantium eligendi! Esse debitis cupiditate magni officia nesciunt sed quod, quia voluptas expedita reiciendis officiis culpa!
        Animi eius cupiditate dignissimos libero eligendi reiciendis, mollitia labore sit, ducimus suscipit quaerat iste deserunt voluptatem culpa, in nobis odio? Dolores ex commodi eaque aperiam fuga assumenda harum hic possimus?
        Officia, natus dolorum aliquam amet, nesciunt alias mollitia laudantium adipisci porro distinctio quos autem saepe eius vel nisi neque reiciendis velit tempore illo quibusdam ratione facilis. Fugit accusamus ratione magni.
        Vel praesentium adipisci ducimus, aliquid eum consectetur iure assumenda officiis in voluptatum magni ratione quo commodi. Fugiat suscipit sit harum nihil repellat, laudantium animi qui quidem, sed ipsa mollitia inventore.
        Ratione, earum magni! Architecto animi culpa dolore totam corporis eligendi, nobis libero fuga enim tenetur, distinctio ratione adipisci natus deserunt, porro omnis reiciendis! Similique quibusdam sapiente delectus recusandae, voluptatem quaerat!
        Quo perferendis earum repudiandae quaerat nisi consectetur veritatis in recusandae atque id amet asperiores, tempora magnam explicabo accusantium fugit minus cupiditate dolorum inventore, aperiam aspernatur? Illo est similique quis totam.
      </motion.p>
    </>
  )
}

export default App
