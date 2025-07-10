"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Star,
  ExternalLink,
  Zap,
  Brain,
  ImageIcon,
  MessageSquare,
  BarChart3,
  Code,
  Music,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  { id: "all", name: "Todas", icon: Zap, count: 24 },
  { id: "text", name: "Geração de Texto", icon: Brain, count: 8 },
  { id: "image", name: "Geração de Imagem", icon: ImageIcon, count: 6 },
  { id: "chat", name: "Chatbots", icon: MessageSquare, count: 4 },
  { id: "analytics", name: "Análise de Dados", icon: BarChart3, count: 3 },
  { id: "code", name: "Programação", icon: Code, count: 2 },
  { id: "audio", name: "Áudio", icon: Music, count: 1 },
]

const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Modelo de linguagem avançado para conversas e geração de texto",
    category: "text",
    price: "Freemium",
    rating: 4.8,
    website: "https://chat.openai.com",
    features: ["Conversação natural", "Geração de código", "Análise de texto"],
    logo: "🤖",
  },
  {
    id: 2,
    name: "DALL-E 3",
    description: "Gerador de imagens a partir de descrições em texto",
    category: "image",
    price: "Pago",
    rating: 4.7,
    website: "https://openai.com/dall-e-3",
    features: ["Geração de imagens", "Alta qualidade", "Controle criativo"],
    logo: "🎨",
  },
  {
    id: 3,
    name: "Claude",
    description: "Assistente de IA para análise, escrita e programação",
    category: "text",
    price: "Freemium",
    rating: 4.6,
    website: "https://claude.ai",
    features: ["Análise de documentos", "Programação", "Raciocínio lógico"],
    logo: "🧠",
  },
  {
    id: 4,
    name: "FlowBite",
    description: "Construa sites com componentes Tailwind CSS",
    category: "code",
    price: "Gratuito",
    rating: 4.9,
    website: "https://flowbite.com/",
    features: ["Componentes prontos", "Tutoriais"],
    logo: "🖼️",
  },
  {
    id: 5,
    name: "GitHub Copilot",
    description: "Assistente de programação com IA",
    category: "code",
    price: "Pago",
    rating: 4.5,
    website: "https://github.com/features/copilot",
    features: ["Autocompletar código", "Sugestões inteligentes", "Múltiplas linguagens"],
    logo: "💻",
  },
  {
    id: 6,
    name: "Stable Diffusion",
    description: "Modelo open-source para geração de imagens",
    category: "image",
    price: "Gratuito",
    rating: 4.4,
    website: "https://stability.ai",
    features: ["Open source", "Customizável", "Comunidade ativa"],
    logo: "🌟",
  },
  {
    id: 7,
    name: "Jasper AI",
    description: "Plataforma de criação de conteúdo com IA",
    category: "text",
    price: "Freemium",
    rating: 4.3,
    website: "https://jasper.ai",
    features: ["Marketing copy", "Blog posts", "Templates"],
    logo: "✍️",
  },
  {
    id: 8,
    name: "Perplexity AI",
    description: "Motor de busca com IA que fornece respostas precisas",
    category: "chat",
    price: "Freemium",
    rating: 4.5,
    website: "https://perplexity.ai",
    features: ["Busca inteligente", "Fontes citadas", "Respostas precisas"],
    logo: "🔍",
  },
  {
    id: 9,
    name: "Runway ML",
    description: "Ferramentas de IA para criação de vídeo e imagem",
    category: "image",
    price: "Freemium",
    rating: 4.6,
    website: "https://runwayml.com",
    features: ["Edição de vídeo", "Geração de imagens", "Efeitos especiais"],
    logo: "🎬",
  },
  {
    id: 10,
    name: "Copy.ai",
    description: "Gerador de conteúdo de marketing com IA",
    category: "text",
    price: "Freemium",
    rating: 4.2,
    website: "https://copy.ai",
    features: ["Copy de vendas", "Posts sociais", "E-mails"],
    logo: "📝",
  },
  {
    id: 11,
    name: "Tableau AI",
    description: "Análise de dados e visualização com IA",
    category: "analytics",
    price: "Pago",
    rating: 4.4,
    website: "https://tableau.com",
    features: ["Visualização de dados", "Insights automáticos", "Dashboards"],
    logo: "📊",
  },
  {
    id: 12,
    name: "ElevenLabs",
    description: "Síntese de voz realista com IA",
    category: "audio",
    price: "Freemium",
    rating: 4.7,
    website: "https://elevenlabs.io",
    features: ["Clonagem de voz", "Múltiplos idiomas", "Alta qualidade"],
    logo: "🎤",
  },
    {
    id: 13,
    name: "Anara",
    description: "Pesquisa cientifica com IA",
    category: "pesquisa",
    price: "Freemium",
    rating: 4.7,
    website: "https://anara.com/new",
    features: ["Pesquisa"],
    logo: "📊",
  },
]

export default function AIToolsLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredTools = aiTools
    .filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory
      const matchesPrice = priceFilter === "all" || tool.price.toLowerCase() === priceFilter.toLowerCase()

      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "name") return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Brain className="h-8 w-8 text-blue-600" />
                Biblioteca de IA
              </h1>
              <p className="text-gray-600 mt-1">Descubra as melhores ferramentas de inteligência artificial</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                {filteredTools.length} ferramentas encontradas
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar ferramentas de IA..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os preços</SelectItem>
                  <SelectItem value="gratuito">Gratuito</SelectItem>
                  <SelectItem value="freemium">Freemium</SelectItem>
                  <SelectItem value="pago">Pago</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Avaliação</SelectItem>
                  <SelectItem value="name">Nome</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Categorias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {category.name}
                      <Badge variant="secondary" className="ml-auto">
                        {category.count}
                      </Badge>
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Tools Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{tool.logo}</div>
                        <div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600 ml-1">{tool.rating}</span>
                            </div>
                            <Badge
                              variant={
                                tool.price === "Gratuito"
                                  ? "default"
                                  : tool.price === "Freemium"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {tool.price}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{tool.description}</CardDescription>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Recursos principais:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tool.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <a href={tool.website} target="_blank" rel="noopener noreferrer">
                          Visitar Site
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma ferramenta encontrada</h3>
                <p className="text-gray-600">Tente ajustar seus filtros ou termo de busca.</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Estatísticas da Biblioteca</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{aiTools.length}</div>
              <div className="text-sm text-gray-600">Total de Ferramentas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {aiTools.filter((tool) => tool.price === "Gratuito").length}
              </div>
              <div className="text-sm text-gray-600">Ferramentas Gratuitas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {(aiTools.reduce((acc, tool) => acc + tool.rating, 0) / aiTools.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
