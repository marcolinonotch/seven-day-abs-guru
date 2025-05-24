import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Flame, Target, Calendar, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const navigate = useNavigate();

  const workoutPlan = [{
    day: 1,
    title: "Aquecimento e Base",
    duration: "15-20 min",
    exercises: [{
      name: "Prancha",
      duration: "30s x 3 séries",
      description: "Mantenha o corpo reto, ombros alinhados",
      videoUrl: "https://www.youtube.com/embed/B296mZDhrP4"
    }, {
      name: "Abdominais Tradicionais",
      duration: "15 rep x 3 séries",
      description: "Movimento controlado, mãos atrás da cabeça",
      videoUrl: "https://www.youtube.com/embed/Xyd_fa5zoEU"
    }, {
      name: "Bicicleta no Ar",
      duration: "20 rep x 3 séries",
      description: "Alterne os joelhos em direção aos cotovelos",
      videoUrl: "https://www.youtube.com/embed/CB2jHAExXI0"
    }, {
      name: "Mountain Climbers",
      duration: "30s x 2 séries",
      description: "Movimento rápido, mantendo a prancha",
      videoUrl: "https://www.youtube.com/embed/cnyTQDSE884"
    }]
  }, {
    day: 2,
    title: "Intensidade Moderada",
    duration: "20-25 min",
    exercises: [{
      name: "Prancha Lateral",
      duration: "20s cada lado x 3",
      description: "Apoie-se no antebraço, corpo alinhado",
      videoUrl: "https://www.youtube.com/embed/XeN_1WVTKkc"
    }, {
      name: "Scissor Kicks",
      duration: "20 rep x 3 séries",
      description: "Pernas alternadas, parte baixa das costas no chão",
      videoUrl: "https://www.youtube.com/embed/0ytdGsUaTbE"
    }, {
      name: "Russian Twists",
      duration: "25 rep x 3 séries",
      description: "Gire o tronco, pés elevados",
      videoUrl: "https://www.youtube.com/embed/DJQXMO_X-vU"
    }, {
      name: "Dead Bug",
      duration: "10 rep cada lado x 2",
      description: "Movimento controlado, core ativado",
      videoUrl: "https://www.youtube.com/embed/4XLEnwUr1d8"
    }]
  }, {
    day: 3,
    title: "Descanso Ativo",
    duration: "10-15 min",
    exercises: [{
      name: "Caminhada",
      duration: "15 minutos",
      description: "Ritmo moderado, respiração profunda",
      videoUrl: "https://www.youtube.com/embed/kLh4nOzjaqQ"
    }, {
      name: "Alongamento de Quadril",
      duration: "30s cada posição",
      description: "Relaxe a região lombar",
      videoUrl: "https://www.youtube.com/embed/FSSDLDhbacc"
    }, {
      name: "Respiração Profunda",
      duration: "5 minutos",
      description: "Inspire 4s, segure 4s, expire 4s",
      videoUrl: "https://www.youtube.com/embed/YRPh_GaiL8s"
    }, {
      name: "Prancha Suave",
      duration: "20s x 2 séries",
      description: "Mantenha a posição com respiração calma",
      videoUrl: "https://www.youtube.com/embed/B296mZDhrP4"
    }]
  }, {
    day: 4,
    title: "Foco no Core",
    duration: "25-30 min",
    exercises: [{
      name: "Hollow Body Hold",
      duration: "20s x 3 séries",
      description: "Lombar colada no chão, pernas e ombros elevados",
      videoUrl: "https://www.youtube.com/embed/K5n4HTOqKcI"
    }, {
      name: "V-Ups",
      duration: "12 rep x 3 séries",
      description: "Suba pernas e tronco simultaneamente",
      videoUrl: "https://www.youtube.com/embed/xSeWHV8n8vA"
    }, {
      name: "Prancha com Elevação de Perna",
      duration: "10 rep cada perna x 2",
      description: "Eleve uma perna por vez na prancha",
      videoUrl: "https://www.youtube.com/embed/mJFCaOC8Qwg"
    }, {
      name: "Burpees Modificados",
      duration: "8 rep x 3 séries",
      description: "Sem o salto, foque no movimento do core",
      videoUrl: "https://www.youtube.com/embed/qLBImHhCXSw"
    }]
  }, {
    day: 5,
    title: "Alta Intensidade",
    duration: "25-30 min",
    exercises: [{
      name: "Tabata Prancha",
      duration: "20s on, 10s off x 4",
      description: "Máxima intensidade por 20 segundos",
      videoUrl: "https://www.youtube.com/embed/B296mZDhrP4"
    }, {
      name: "High Knees",
      duration: "30s x 3 séries",
      description: "Joelhos no peito, movimento rápido",
      videoUrl: "https://www.youtube.com/embed/8opcQdC-V-U"
    }, {
      name: "Jumping Jacks",
      duration: "45s x 3 séries",
      description: "Movimento explosivo, braços e pernas",
      videoUrl: "https://www.youtube.com/embed/iSSAk4XCsRA"
    }, {
      name: "Abdominais Reverse",
      duration: "15 rep x 3 séries",
      description: "Eleve o quadril em direção ao peito",
      videoUrl: "https://www.youtube.com/embed/0ytdGsUaTbE"
    }]
  }, {
    day: 6,
    title: "Resistência",
    duration: "30-35 min",
    exercises: [{
      name: "Prancha Longa",
      duration: "45s x 3 séries",
      description: "Mantenha por mais tempo com respiração controlada",
      videoUrl: "https://www.youtube.com/embed/B296mZDhrP4"
    }, {
      name: "Bear Crawl",
      duration: "30s x 3 séries",
      description: "Movimente-se em posição de urso",
      videoUrl: "https://www.youtube.com/embed/Azrm7DxuJpI"
    }, {
      name: "Leg Raises",
      duration: "15 rep x 3 séries",
      description: "Pernas retas, movimento controlado",
      videoUrl: "https://www.youtube.com/embed/0ytdGsUaTbE"
    }, {
      name: "Flutter Kicks",
      duration: "45s x 3 séries",
      description: "Movimento rápido e constante das pernas",
      videoUrl: "https://www.youtube.com/embed/ANVa9JcW01s"
    }]
  }, {
    day: 7,
    title: "Finalização",
    duration: "20-25 min",
    exercises: [{
      name: "Circuito Completo",
      duration: "3 rounds",
      description: "Combine todos os exercícios favoritos",
      videoUrl: "https://www.youtube.com/embed/B296mZDhrP4"
    }, {
      name: "Prancha Challenge",
      duration: "Máximo tempo",
      description: "Teste sua evolução desde o dia 1",
      videoUrl: "https://www.youtube.com/embed/B296mZDhrP4"
    }, {
      name: "Celebração Ativa",
      duration: "10 minutos",
      description: "Movimento livre, dance, comemore!",
      videoUrl: "https://www.youtube.com/embed/kLh4nOzjaqQ"
    }, {
      name: "Alongamento Final",
      duration: "10 minutos",
      description: "Relaxe todo o corpo, respiração profunda",
      videoUrl: "https://www.youtube.com/embed/FSSDLDhbacc"
    }]
  }];

  const completeDayWorkout = (day: number) => {
    if (!completedDays.includes(day)) {
      setCompletedDays([...completedDays, day]);
      toast({
        title: "Parabéns! 🎉",
        description: `Você completou o treino do Dia ${day}!`
      });
    }
  };

  const progressPercentage = completedDays.length / 7 * 100;

  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-purple-900 text-white p-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-3 rounded-full">
              <Flame className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-bold text-4xl bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              DESAFIO: Queima Barriga 7 Dias
            </h1>
          </div>
          <p className="text-gray-300 text-lg mb-6">
            Queime aquela gordurinha chata e defina sua barriga em casa em até 7 dias.
            Clique nos cards e acesse os exercícios de cada dia.
          </p>
          
          {/* Progress Bar */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">Progresso Geral</span>
              <span className="text-sm text-orange-400 font-bold">{completedDays.length}/7 dias</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Days Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {workoutPlan.map(workout => <Card 
            key={workout.day} 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border ${
              completedDays.includes(workout.day) 
                ? 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-400 shadow-green-400/20' 
                : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-orange-400 hover:shadow-orange-400/20'
            } shadow-lg`} 
            onClick={() => navigate(`/workout/${workout.day}`)}
          >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      completedDays.includes(workout.day) 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                    }`}>
                      {completedDays.includes(workout.day) ? <CheckCircle className="h-5 w-5" /> : workout.day}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">Dia {workout.day}</CardTitle>
                      <p className="text-sm text-gray-400">{workout.title}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-orange-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-orange-400" />
                    <span className="text-gray-300">{workout.duration}</span>
                  </div>
                  <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border border-purple-600">
                    {workout.exercises.length} exercícios
                  </Badge>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Motivation Section */}
        {completedDays.length === 7 && <Card className="mt-8 bg-gradient-to-r from-green-600 to-emerald-700 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Parabéns! Desafio Concluído! 🎉</h2>
                <p className="text-green-100">
                  Você completou todos os 7 dias do desafio! Continue com seus hábitos saudáveis.
                </p>
              </div>
            </CardContent>
          </Card>}

        {/* Tips Section */}
        <Card className="mt-8 bg-gray-800 border-gray-700">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-orange-400" />
              Dicas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="font-medium text-orange-400">💧 Hidratação</p>
                <p className="text-gray-300">Beba pelo menos 2L de água por dia</p>
              </div>
              <div className="space-y-2 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="font-medium text-orange-400">🥗 Alimentação</p>
                <p className="text-gray-300">Mantenha uma dieta equilibrada e rica em fibras</p>
              </div>
              <div className="space-y-2 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="font-medium text-orange-400">😴 Descanso</p>
                <p className="text-gray-300">Durma 7-8 horas por noite para recuperação</p>
              </div>
              <div className="space-y-2 p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="font-medium text-orange-400">🎯 Consistência</p>
                <p className="text-gray-300">A regularidade é mais importante que a intensidade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default Index;
