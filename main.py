import streamlit as st
from google.cloud import firestore
import toml 
import json 

def writeSecrets(): 
    """
    Take firestore api and converts to secrets toml file for streamlit to process  
    """
    output_file = ".streamlit/secrets.toml"
    with open("firestore-key.json") as json_file: 
        json_text = json_file.read()

    config = {"textkey":json_text}
    toml_config = toml.dumps(config)

    with open(output_file,"w") as target: 
        target.write(toml_config)
    
def loadFirestore(): 
    key_dict = json.loads(st.secrets['textkey'])
    db = firestore.Client.from_service_account_json("firestore-key.json")
    doc_ref = db.collection("posts").document("Google") # Create a reference to the Google post.
    doc = doc_ref.get() # Then get the data at that reference.

    st.write("The id is: ", doc.id)
    st.write("The contents are: ", doc.to_dict())


def main(): 
    writeSecrets() #generate toml file 
    loadFirestore()

if __name__ == "__main__": 
    main()