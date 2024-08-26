import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbarsimple.css";

function Navbarsimple(){
    const { t } = useTranslation();

return(
<>
<header>
<a href="http://localhost:3000/">{t('brandName')}</a>
</header>
</>
)
}
export default Navbarsimple;