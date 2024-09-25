import { ButtonPlan } from "../UI/buttons/buttonPlan";
import CardsPlan  from "../UI/cards-Plan/CardsPlan";
import { PlanSection } from "./planStyle";

function Plan() {
  return (
    <PlanSection>
      <div className="container">
        <div className="container-plan">
          <h2>ESCOLHA O MELHOR PLANO PARA VOCÊ</h2>
          <br></br>

          <div className="container-buttons">
            <div>
              <p>ECONOMIZE ATÉ 30%</p>
            </div>
            <div>
              <ButtonPlan>MENSAL</ButtonPlan>
              <ButtonPlan>ANUAL PARCELADO</ButtonPlan>
            </div>
          </div>
        </div>
      </div>

      <div className="container-cards">
        <CardsPlan 
        title2='Básico com Anúncios'

        description='2 dispositivos ao mesmo tempo'
         
        

          price='R$ 19,90/mês'
        
        ></CardsPlan>
      </div>
    </PlanSection>
  );
}

export default Plan;
