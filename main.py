from sgqlc.endpoint.http import HTTPEndpoint
from sgqlc.operation import Operation
from schema_types import schema_types  
import os
from dotenv import load_dotenv
load_dotenv()
auth_header = os.getenv("auth_header")
endpoint = HTTPEndpoint(
    "https://api.github.com/graphql",
    base_headers={"Authorization": f"Bearer {auth_header}"}
)

op = Operation(schema_types.Query)

user = op.user(login="hmaan0")
user.name()
user.bio()
repositories = user.repositories(first=5).nodes
repositories.name()
repositories.stargazer_count()


response = endpoint(op)

print(response)

