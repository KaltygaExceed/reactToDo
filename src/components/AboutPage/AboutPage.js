import style from "./AboutPage.module.css"
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import greek from "../../assets/greek.jpeg"
export default function AboutPage({value}) {
    return (
        <div>
            <Header
                value='About'
            />
            <div className={style.textContainer}>
                Όντας δε θνητούς θνητά και φρονείν χρεών. Πάντων χρημάτων μέτρον έστιν άνθρωπος. Σκιάς όναρ άνθρωπος.
                Άνθρωπος: ο αναθρών ά όπωπε. Ουκ ένι ιατρικήν είδέναι, όστις μη οίδεν ό τι εστίν άνθρωπος.
                Ως χαρίεν εστ’ άνθρωπος αν άνθρωπος ή. Άπαξ άνθρωποι γεγόναμεν, δις δε ουκ έστι γενέσθαι.
                Τω ανθρώπω μικρώ κόσμω όντι.Δολερόν μεν αεί κατά πάντα δη τρόπον πέφυκεν άνθρωπος.
                <img className={style.img} src={greek} alt="image"/>
                Οι πλείστοι άνθρωποι κακοί. Εκ λόγου άλλος εκβαίνει λόγος. Κάλλιστον κόσμος, ποίημα γαρ θεού.
                Κόσμον τονδε, τον αυτόν απάντων, ούτε τις θεών ούτε ανθρώπων εποίησεν, αλλ' ην αεί και έστιν και έστε πύρ αείζωον.
                <Link to="/"> Return to main page </Link>
            </div>



        </div>
    )
}

