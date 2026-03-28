<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Author;
use App\Models\Issue;
use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder
{
    public function run(): void
    {
        $issue = Issue::create([
            'volume' => 1,
            'number' => 1,
            'title' => 'Numéro inaugural',
            'description' => 'Premier numéro de la Revue Internationale des Sciences de l\'Éducation de l\'ADiMA.',
            'published_at' => '2025-06-15',
            'is_published' => true,
        ]);

        $authors = [
            Author::create(['first_name' => 'Moussa', 'last_name' => 'Diop', 'institution' => 'FASTEF, UCAD']),
            Author::create(['first_name' => 'Aminata', 'last_name' => 'Ndiaye', 'institution' => 'ENS, Bamako']),
            Author::create(['first_name' => 'Ousmane', 'last_name' => 'Ba', 'institution' => 'FASTEF, UCAD']),
            Author::create(['first_name' => 'Fatou', 'last_name' => 'Sow', 'institution' => 'Université G.B., Conakry']),
        ];

        $a1 = Article::create([
            'issue_id' => $issue->id,
            'title' => 'L\'enseignement des mathématiques en Afrique francophone : état des lieux et perspectives',
            'abstract' => 'Cet article dresse un panorama de l\'enseignement des mathématiques dans les pays francophones d\'Afrique de l\'Ouest. Il analyse les défis pédagogiques, les programmes en vigueur et propose des pistes d\'amélioration basées sur les résultats de recherche récents.',
            'keywords' => 'mathématiques, didactique, Afrique francophone, enseignement secondaire',
            'pages_start' => 1,
            'pages_end' => 18,
            'sort_order' => 1,
            'is_published' => true,
            'published_at' => '2025-06-15',
        ]);
        $a1->authors()->attach([$authors[0]->id => ['sort_order' => 1], $authors[1]->id => ['sort_order' => 2]]);

        $a2 = Article::create([
            'issue_id' => $issue->id,
            'title' => 'Formation des enseignants et intégration des TIC : une étude de cas au Sénégal',
            'abstract' => 'Cette étude explore les pratiques d\'intégration des technologies de l\'information et de la communication dans la formation initiale des enseignants à la FASTEF. Les résultats montrent des avancées significatives mais aussi des obstacles persistants.',
            'keywords' => 'TIC, formation des enseignants, FASTEF, Sénégal, innovation pédagogique',
            'pages_start' => 19,
            'pages_end' => 35,
            'sort_order' => 2,
            'is_published' => true,
            'published_at' => '2025-06-15',
        ]);
        $a2->authors()->attach([$authors[2]->id => ['sort_order' => 1]]);

        $a3 = Article::create([
            'issue_id' => $issue->id,
            'title' => 'Évaluation des compétences scientifiques au cycle fondamental : approche comparative',
            'abstract' => 'Cette recherche compare les dispositifs d\'évaluation des compétences scientifiques dans trois pays ouest-africains. Elle met en lumière les convergences et divergences dans les approches curriculaires.',
            'keywords' => 'évaluation, compétences, sciences, curriculum, Afrique de l\'Ouest',
            'pages_start' => 36,
            'pages_end' => 52,
            'sort_order' => 3,
            'is_published' => true,
            'published_at' => '2025-06-15',
        ]);
        $a3->authors()->attach([$authors[3]->id => ['sort_order' => 1], $authors[0]->id => ['sort_order' => 2]]);
    }
}
