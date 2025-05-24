import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Flame, Target, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const workoutPlan = [{
    day: 1,
    title: "Aquecimento e Base",
    duration: "15-20 min",
    exercises: [{
      name: "Prancha",
      duration: "30s x 3 séries",
      description: "Mantenha o corpo reto, ombros alinhados"
    }, {
      name: "Abdominais Tradicionais",
      duration: "15 rep x 3 séries",
      description: "Movimento controlado, mãos atrás da cabeça"
    }, {
      name: "Bicicleta no Ar",
      duration: "20 rep x 3 séries",
      description: "Alterne os joelhos em direção aos cotovelos"
    }, {
      name: "Mountain Climbers",
      duration: "30s x 2 séries",
      description: "Movimento rápido, mantendo a prancha"
    }]
  }, {
    day: 2,
    title: "Intensidade Moderada",
    duration: "20-25 min",
    exercises: [{
      name: "Prancha Lateral",
      duration: "20s cada lado x 3",
      description: "Apoie-se no antebraço, corpo alinhado"
    }, {
      name: "Scissor Kicks",
      duration: "20 rep x 3 séries",
      description: "Pernas alternadas, parte baixa das costas no chão"
    }, {
      name: "Russian Twists",
      duration: "25 rep x 3 séries",
      description: "Gire o tronco, pés elevados"
    }, {
      name: "Dead Bug",
      duration: "10 rep cada lado x 2",
      description: "Movimento controlado, core ativado"
    }]
  }, {
    day: 3,
    title: "Descanso Ativo",
    duration: "10-15 min",
    exercises: [{
      name: "Caminhada",
      duration: "15 minutos",
      description: "Ritmo moderado, respiração profunda"
    }, {
      name: "Alongamento de Quadril",
      duration: "30s cada posição",
      description: "Relaxe a região lombar"
    }, {
      name: "Respiração Profunda",
      duration: "5 minutos",
      description: "Inspire 4s, segure 4s, expire 4s"
    }, {
      name: "Prancha Suave",
      duration: "20s x 2 séries",
      description: "Mantenha a posição com respiração calma"
    }]
  }, {
    day: 4,
    title: "Foco no Core",
    duration: "25-30 min",
    exercises: [{
      name: "Hollow Body Hold",
      duration: "20s x 3 séries",
      description: "Lombar colada no chão, pernas e ombros elevados"
    }, {
      name: "V-Ups",
      duration: "12 rep x 3 séries",
      description: "Suba pernas e tronco simultaneamente"
    }, {
      name: "Prancha com Elevação de Perna",
      duration: "10 rep cada perna x 2",
      description: "Eleve uma perna por vez na prancha"
    }, {
      name: "Burpees Modificados",
      duration: "8 rep x 3 séries",
      description: "Sem o salto, foque no movimento do core"
    }]
  }, {
    day: 5,
    title: "Alta Intensidade",
    duration: "25-30 min",
    exercises: [{
      name: "Tabata Prancha",
      duration: "20s on, 10s off x 4",
      description: "Máxima intensidade por 20 segundos"
    }, {
      name: "High Knees",
      duration: "30s x 3 séries",
      description: "Joelhos no peito, movimento rápido"
    }, {
      name: "Jumping Jacks",
      duration: "45s x 3 séries",
      description: "Movimento explosivo, braços e pernas"
    }, {
      name: "Abdominais Reverse",
      duration: "15 rep x 3 séries",
      description: "Eleve o quadril em direção ao peito"
    }]
  }, {
    day: 6,
    title: "Resistência",
    duration: "30-35 min",
    exercises: [{
      name: "Prancha Longa",
      duration: "45s x 3 séries",
      description: "Mantenha por mais tempo com respiração controlada"
    }, {
      name: "Bear Crawl",
      duration: "30s x 3 séries",
      description: "Movimente-se em posição de urso"
    }, {
      name: "Leg Raises",
      duration: "15 rep x 3 séries",
      description: "Pernas retas, movimento controlado"
    }, {
      name: "Flutter Kicks",
      duration: "45s x 3 séries",
      description: "Movimento rápido e constante das pernas"
    }]
  }, {
    day: 7,
    title: "Finalização",
    duration: "20-25 min",
    exercises: [{
      name: "Circuito Completo",
      duration: "3 rounds",
      description: "Combine todos os exercícios favoritos"
    }, {
      name: "Prancha Challenge",
      duration: "Máximo tempo",
      description: "Teste sua evolução desde o dia 1"
    }, {
      name: "Celebração Ativa",
      duration: "10 minutos",
      description: "Movimento livre, dance, comemore!"
    }, {
      name: "Alongamento Final",
      duration: "10 minutos",
      description: "Relaxe todo o corpo, respiração profunda"
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
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-2 rounded-full">
              <Flame className="h-6 w-6" />
            </div>
            <h1 className="font-bold text-3xl">DESAFIO: Queima Barriga 7 Dias</h1>
          </div>
          <p className="text-orange-100 text-lg mb-4">Queime aquela gordurinha chata e defina sua barriga em casa em até 7 dias.
Clique nos cards e acesse os exercícios de cada dia.</p>
          
          {/* Progress Bar */}
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progresso Geral</span>
              <span className="text-sm">{completedDays.length}/7 dias</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Days Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {workoutPlan.map(workout => <Card key={workout.day} className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${completedDays.includes(workout.day) ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' : 'hover:bg-gradient-to-br hover:from-orange-50 hover:to-purple-50'}`} onClick={() => setSelectedDay(workout.day)}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${completedDays.includes(workout.day) ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'}`}>
                      {completedDays.includes(workout.day) ? <CheckCircle className="h-4 w-4" /> : workout.day}
                    </div>
                    <div>
                      <CardTitle className="text-lg">Dia {workout.day}</CardTitle>
                      <p className="text-sm text-gray-600">{workout.title}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {workout.duration}
                  </div>
                  <Badge variant="secondary">
                    {workout.exercises.length} exercícios
                  </Badge>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Selected Day Details */}
        {selectedDay && <Card className="bg-white shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Target className="h-6 w-6" />
                    Dia {selectedDay} - {workoutPlan[selectedDay - 1].title}
                  </CardTitle>
                  <p className="text-orange-100 flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4" />
                    Duração: {workoutPlan[selectedDay - 1].duration}
                  </p>
                </div>
                <Button onClick={() => setSelectedDay(null)} variant="ghost" className="text-white hover:bg-white/20">
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {workoutPlan[selectedDay - 1].exercises.map((exercise, index) => <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-800">{exercise.name}</h4>
                        <p className="text-orange-600 font-medium mt-1">{exercise.duration}</p>
                        <p className="text-gray-600 text-sm mt-2">{exercise.description}</p>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ml-4">
                        {index + 1}
                      </div>
                    </div>
                  </div>)}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <Button onClick={() => completeDayWorkout(selectedDay)} disabled={completedDays.includes(selectedDay)} className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white py-3 text-lg font-semibold">
                  {completedDays.includes(selectedDay) ? <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Treino Concluído!
                    </> : <>
                      <Target className="mr-2 h-5 w-5" />
                      Marcar como Concluído
                    </>}
                </Button>
              </div>
            </CardContent>
          </Card>}

        {/* Motivation Section */}
        {completedDays.length === 7 && <Card className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
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
        <Card className="mt-8 border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Calendar className="h-5 w-5" />
              Dicas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-medium text-blue-700">💧 Hidratação</p>
                <p className="text-blue-600">Beba pelo menos 2L de água por dia</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-blue-700">🥗 Alimentação</p>
                <p className="text-blue-600">Mantenha uma dieta equilibrada e rica em fibras</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-blue-700">😴 Descanso</p>
                <p className="text-blue-600">Durma 7-8 horas por noite para recuperação</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-blue-700">🎯 Consistência</p>
                <p className="text-blue-600">A regularidade é mais importante que a intensidade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Index;