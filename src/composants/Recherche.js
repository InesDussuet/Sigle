import React from 'react'
import { connect } from 'react-redux'
import RechSigle from './RechSigle'
import AjoutBouton from './AjoutBouton'
import AjoutPage from './AjoutPage'
import Infos from './Infos'
import Retour from './Retour'
import { selectSigle, selectPage } from '../reducteurs/form'
const Presentation = props => 
 {
    
      return(
        <div className="grid-x grid-padding-x" >
          <div className ="cell small-12">
              <div className="grid-x grid-padding-x" id={(props.sigle.length==0)? "RechVide" : "Recherche"}>
                  {(props.sigle.length==0) && <div className="cell small-12">
                                                <div className="grid-x grid-padding-x text-center">
                                                  <div className="cell auto">
                                                  </div>
                                                  <div className="cell small-4">
                                                    <h2> 
                                                      ArchiSigle
                                                    </h2>
                                                  </div>
                                                  <div className="cell auto">
                                                  </div>
                                                </div>
                                              </div>
                  }
                  <div className="cell auto"></div>
      		          <RechSigle />
                  <div className="cell auto"></div>
              </div>
          </div>
          <div className =" cell small-12">
            <div className="Barre">
            </div>
          </div>
    		  {(props.sigle.length>0) && <Infos />}
        </div>
        )
    
	
	}

const mapStateToProps = (state) => ({
  sigle: selectSigle(state),
  page: selectPage(state)
})

const Recherche = connect(mapStateToProps)(Presentation)

export default Recherche