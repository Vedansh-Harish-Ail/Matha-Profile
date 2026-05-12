from typing import TypedDict, Annotated, List
from langgraph.graph import StateGraph, END
from openai import OpenAI
import os

# State definition
class AgentState(TypedDict):
    query: str
    context: str
    response: str
    history: List[str]

class EduSphereAI:
    def __init__(self, api_key: str = None):
        self.client = OpenAI(api_key=api_key or os.getenv("OPENAI_API_KEY"))
        self.workflow = self._build_graph()

    def _analyze_request(self, state: AgentState):
        """Analyze the user query and decide what data to fetch."""
        # Simple placeholder for analysis logic
        return state

    def _generate_insight(self, state: AgentState):
        """Generate insights using OpenAI based on retrieved context."""
        response = self.client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {"role": "system", "content": "You are the EduSphere ERP Assistant. Provide concise, data-driven insights for school administrators."},
                {"role": "user", "content": f"Context: {state['context']}\nQuery: {state['query']}"}
            ]
        )
        state["response"] = response.choices[0].message.content
        return state

    def _build_graph(self):
        builder = StateGraph(AgentState)
        builder.add_node("analyze", self._analyze_request)
        builder.add_node("generate", self._generate_insight)
        
        builder.set_entry_point("analyze")
        builder.add_edge("analyze", "generate")
        builder.add_edge("generate", END)
        
        return builder.compile()

    async def get_insight(self, query: str, context: str):
        initial_state = {
            "query": query,
            "context": context,
            "response": "",
            "history": []
        }
        result = await self.workflow.ainvoke(initial_state)
        return result["response"]
